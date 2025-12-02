import mongoose from 'mongoose';
import { BloodRequestModel, DonationModel, DonorModel, UserModel, BloodRequest, Donation, DonorSummary, User } from './models';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';

const mem = {
  users: [] as User[],
  donors: [
    { id: uuid(), name: 'Shashwata Chowdhury', location: 'Labaid Hospital', bloodGroup: 'B+', rating: 5 },
    { id: uuid(), name: 'Fhamida Nupur', location: 'Dhaka Medical College', bloodGroup: 'A+', rating: 4 },
    { id: uuid(), name: 'Sadman Hossain', location: 'Labaid Hospital', bloodGroup: 'B+', rating: 5 },
    { id: uuid(), name: 'Sabrina Binte', location: 'Square Hospital', bloodGroup: 'O+', rating: 4 },
  ] as DonorSummary[],
  requests: [] as BloodRequest[],
};

let mongoReady = false;

export const initMongo = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) return;
  if (mongoReady) return;
  await mongoose.connect(uri);
  mongoReady = true;
};

export const db = {
  seedDefaultUser: async () => {
    if (mongoReady) {
      const exists = await UserModel.findOne({ email: 'demo@example.com' }).exec();
      if (!exists) {
        const passwordHash = await bcrypt.hash('password123', 10);
        const user = await UserModel.create({
          fullName: 'Demo User',
          email: 'demo@example.com',
          mobileNo: '1234567890',
          location: 'Khamagon',
          bloodGroup: 'A+',
          gender: 'male',
          passwordHash,
          availableToDonate: true,
          rewardsPoints: 10,
        });
        await DonationModel.create({
          name: 'Raktadaan Abhiyan',
          bloodGroup: user.bloodGroup,
          donationDate: new Date('2024-06-14'),
          donor: { _id: String(user._id), name: user.fullName, bloodGroup: user.bloodGroup, email: user.email },
          location: 'Goverment Hospital, Khamagon',
          unitsDonated: 1,
          userId: String(user._id),
        });
        if ((await DonorModel.countDocuments().exec()) === 0) {
          await DonorModel.insertMany(mem.donors);
        }
      }
    } else {
      const exists = mem.users.find(u => u.email === 'demo@example.com');
      if (!exists) {
        const id = uuid();
        const passwordHash = await bcrypt.hash('password123', 10);
        mem.users.push({
          id,
          fullName: 'Demo User',
          email: 'demo@example.com',
          mobileNo: '1234567890',
          location: 'Khamagon',
          bloodGroup: 'A+',
          gender: 'male',
          passwordHash,
          availableToDonate: true,
          rewardsPoints: 10,
        });
      }
    }
  },
  getDonationsForUser: async (user: User): Promise<Donation[]> => {
    if (mongoReady) {
      const docs = await DonationModel.find({ userId: (user as any)._id || user.id }).exec();
      return docs.map(d => ({
        _id: String(d._id),
        name: d.name,
        bloodGroup: d.bloodGroup,
        donationDate: d.donationDate.toISOString(),
        donor: d.donor,
        location: d.location,
        unitsDonated: d.unitsDonated,
      }));
    }
    return [
      {
        _id: uuid(),
        name: 'Raktadaan Abhiyan',
        bloodGroup: user.bloodGroup,
        donationDate: '2024-06-14',
        donor: { _id: user.id, name: user.fullName, bloodGroup: user.bloodGroup, email: user.email },
        location: 'Goverment Hospital, Khamagon',
        unitsDonated: 1,
      },
    ];
  },
  findUserByEmail: async (email: string) => {
    if (mongoReady) return await UserModel.findOne({ email }).exec();
    return mem.users.find(u => u.email === email) || null;
  },
  createUser: async (u: { fullName: string; email: string; mobileNo: string; location: string; bloodGroup: string; gender: string; password: string }) => {
    const passwordHash = await bcrypt.hash(u.password, 10);
    if (mongoReady) {
      return await UserModel.create({
        fullName: u.fullName,
        email: u.email,
        mobileNo: u.mobileNo,
        location: u.location,
        bloodGroup: u.bloodGroup,
        gender: u.gender as any,
        passwordHash,
      });
    }
    const id = uuid();
    mem.users.push({
      id,
      fullName: u.fullName,
      email: u.email,
      mobileNo: u.mobileNo,
      location: u.location,
      bloodGroup: u.bloodGroup,
      gender: u.gender as any,
      passwordHash,
      availableToDonate: false,
      rewardsPoints: 0,
    } as User);
    return { id } as any;
  },
  findUserById: async (id: string) => {
    if (mongoReady) return await UserModel.findById(id).exec();
    return mem.users.find(u => u.id === id) || null;
  },
  listDonors: async (): Promise<DonorSummary[]> => {
    if (mongoReady) {
      const docs = await DonorModel.find().exec();
      return docs.map(d => ({ id: String(d._id), name: d.name, location: d.location, bloodGroup: d.bloodGroup, rating: d.rating }));
    }
    return mem.donors;
  },
  listRequests: async (): Promise<BloodRequest[]> => {
    if (mongoReady) {
      const docs = await BloodRequestModel.find().sort({ createdAt: -1 }).exec();
      return docs.map(r => ({
        id: String(r._id),
        patientName: r.patientName,
        bloodType: r.bloodType,
        age: r.age,
        diseaseName: r.diseaseName,
        location: r.location,
        contactNumber: r.contactNumber,
        createdAt: (r as any).createdAt?.toISOString?.() || new Date().toISOString(),
      }));
    }
    return mem.requests;
  },
  createRequest: async (req: Omit<BloodRequest, 'id' | 'createdAt'>) => {
    if (mongoReady) {
      const created = await BloodRequestModel.create({
        patientName: req.patientName,
        bloodType: req.bloodType,
        age: req.age,
        diseaseName: req.diseaseName,
        location: req.location,
        contactNumber: req.contactNumber,
      });
      return {
        id: String(created._id),
        patientName: created.patientName,
        bloodType: created.bloodType,
        age: created.age,
        diseaseName: created.diseaseName,
        location: created.location,
        contactNumber: created.contactNumber,
        createdAt: (created as any).createdAt?.toISOString?.() || new Date().toISOString(),
      } as BloodRequest;
    }
    const item = { id: uuid(), ...req, createdAt: new Date().toISOString() } as BloodRequest;
    mem.requests.unshift(item);
    return item;
  },
};

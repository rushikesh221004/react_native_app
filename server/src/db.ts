import mongoose from 'mongoose';
import { BloodRequestModel, DonationModel, DonorModel, UserModel } from './models';
import bcrypt from 'bcryptjs';

let mongoReady = false;

export const initMongo = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI;
  if (!uri || mongoReady) return;
  try {
    await mongoose.connect(uri);
    mongoReady = true;
  } catch {
    mongoReady = false;
  }
};

export const db = {
  getDonationsForUser: async (userId: string) => {
    const docs = await DonationModel.find({ userId }).exec();
    return docs.map(d => ({
      _id: String(d._id),
      name: d.name,
      bloodGroup: d.bloodGroup,
      donationDate: d.donationDate.toISOString(),
      donor: d.donor,
      location: d.location,
      unitsDonated: d.unitsDonated,
    }));
  },
  findUserByEmail: async (email: string) => {
    return await UserModel.findOne({ email }).exec();
  },
  createUser: async (u: { fullName: string; email: string; mobileNo: string; location: string; bloodGroup: string; gender: string; password: string }) => {
    const passwordHash = await bcrypt.hash(u.password, 10);
    return await UserModel.create({
      fullName: u.fullName,
      email: u.email,
      mobileNo: u.mobileNo,
      location: u.location,
      bloodGroup: u.bloodGroup,
      gender: u.gender as any,
      passwordHash,
    });
  },
  findUserById: async (id: string) => {
    return await UserModel.findById(id).exec();
  },
  setUserAvailability: async (userId: string, available: boolean) => {
    const user = await UserModel.findByIdAndUpdate(userId, { availableToDonate: available }, { new: true }).exec();
    if (!user) return null;
    if (available) {
      await DonorModel.findOneAndUpdate(
        { userId: String(user._id) },
        {
          userId: String(user._id),
          name: user.fullName,
          location: user.location,
          bloodGroup: user.bloodGroup,
        },
        { upsert: true, new: true }
      ).exec();
    } else {
      await DonorModel.findOneAndDelete({ userId: String(user._id) }).exec();
    }
    return user;
  },
  listDonors: async () => {
    return await DonorModel.find().exec();
  },
  createDonor: async (donor: { name: string; location: string; bloodGroup: string; rating: number }) => {
    return await DonorModel.create(donor);
  },
  updateDonor: async (id: string, donor: Partial<{ name: string; location: string; bloodGroup: string; rating: number }>) => {
    return await DonorModel.findByIdAndUpdate(id, donor, { new: true }).exec();
  },
  deleteDonor: async (id: string) => {
    return await DonorModel.findByIdAndDelete(id).exec();
  },
  listRequests: async () => {
    return await BloodRequestModel.find().sort({ createdAt: -1 }).exec();
  },
  createRequest: async (req: { patientName: string; bloodType: string; age: number; diseaseName: string; location: string; contactNumber: string }) => {
    return await BloodRequestModel.create(req);
  },
  updateRequest: async (id: string, req: Partial<{ patientName: string; bloodType: string; age: number; diseaseName: string; location: string; contactNumber: string }>) => {
    return await BloodRequestModel.findByIdAndUpdate(id, req, { new: true }).exec();
  },
  deleteRequest: async (id: string) => {
    return await BloodRequestModel.findByIdAndDelete(id).exec();
  },
};

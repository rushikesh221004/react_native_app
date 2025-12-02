import mongoose, { Document } from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;
export type Gender = 'male' | 'female' | 'other';

export interface User {
  id: string;
  fullName: string;
  email: string;
  mobileNo: string;
  location: string;
  bloodGroup: string;
  gender: Gender;
  passwordHash: string;
  availableToDonate: boolean;
  rewardsPoints: number;
}

export interface Donation {
  _id: string;
  name: string;
  bloodGroup: string;
  donationDate: string;
  donor: { _id: string; name: string; bloodGroup: string; email: string };
  location: string;
  unitsDonated: number;
}

export interface DonorSummary {
  id: string;
  name: string;
  location: string;
  bloodGroup: string;
  rating: number;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodType: string;
  age: number;
  diseaseName: string;
  location: string;
  contactNumber: string;
  createdAt: string;
}

interface UserDoc extends Document {
  fullName: string;
  email: string;
  mobileNo: string;
  location: string;
  bloodGroup: string;
  gender: Gender;
  passwordHash: string;
  availableToDonate: boolean;
  rewardsPoints: number;
}

const UserSchema = new Schema<UserDoc>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNo: { type: String, required: true },
  location: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  gender: { type: String, required: true },
  passwordHash: { type: String, required: true },
  availableToDonate: { type: Boolean, default: false },
  rewardsPoints: { type: Number, default: 0 },
}, { timestamps: true });

interface DonorDoc extends Document {
  name: string;
  location: string;
  bloodGroup: string;
  rating: number;
  userId?: string;
}

const DonorSchema = new Schema<DonorDoc>({
  name: { type: String, required: true },
  location: { type: String, required: true },
  bloodGroup: { type: String, required: true, index: true },
  rating: { type: Number, default: 0 },
  userId: { type: String, index: true, unique: true, sparse: true },
}, { timestamps: true });

interface BloodRequestDoc extends Document {
  patientName: string;
  bloodType: string;
  age: number;
  diseaseName: string;
  location: string;
  contactNumber: string;
  createdAt: Date;
}

const BloodRequestSchema = new Schema<BloodRequestDoc>({
  patientName: { type: String, required: true },
  bloodType: { type: String, required: true, index: true },
  age: { type: Number, required: true },
  diseaseName: { type: String, required: true },
  location: { type: String, required: true },
  contactNumber: { type: String, required: true },
}, { timestamps: { createdAt: true, updatedAt: true } });

interface DonationDoc extends Document {
  name: string;
  bloodGroup: string;
  donationDate: Date;
  donor: { _id: string; name: string; bloodGroup: string; email: string };
  location: string;
  unitsDonated: number;
  userId: string;
}

const DonationSchema = new Schema<DonationDoc>({
  name: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  donationDate: { type: Date, required: true },
  donor: {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    email: { type: String, required: true },
  },
  location: { type: String, required: true },
  unitsDonated: { type: Number, required: true },
  userId: { type: String, required: true, index: true },
}, { timestamps: true });

export const UserModel = mongoose.models.User || model<UserDoc>('User', UserSchema);
export const DonorModel = mongoose.models.Donor || model<DonorDoc>('Donor', DonorSchema);
export const BloodRequestModel = mongoose.models.BloodRequest || model<BloodRequestDoc>('BloodRequest', BloodRequestSchema);
export const DonationModel = mongoose.models.Donation || model<DonationDoc>('Donation', DonationSchema);

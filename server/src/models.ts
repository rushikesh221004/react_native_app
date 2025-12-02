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
}

const DonorSchema = new Schema<DonorDoc>({
  name: String,
  location: String,
  bloodGroup: String,
  rating: Number,
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
  patientName: String,
  bloodType: String,
  age: Number,
  diseaseName: String,
  location: String,
  contactNumber: String,
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
  name: String,
  bloodGroup: String,
  donationDate: Date,
  donor: {
    _id: String,
    name: String,
    bloodGroup: String,
    email: String,
  },
  location: String,
  unitsDonated: Number,
  userId: String,
}, { timestamps: true });

export const UserModel = mongoose.models.User || model<UserDoc>('User', UserSchema);
export const DonorModel = mongoose.models.Donor || model<DonorDoc>('Donor', DonorSchema);
export const BloodRequestModel = mongoose.models.BloodRequest || model<BloodRequestDoc>('BloodRequest', BloodRequestSchema);
export const DonationModel = mongoose.models.Donation || model<DonationDoc>('Donation', DonationSchema);
import mongoose, { Schema, model, Document } from 'mongoose';

import { BookingInterface } from 'interfaces/booking';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  make: string;
  year: number;
  color: string;
  mileage: number;
  company_id: string;
  availability_status: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    review?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  make?: string;
  color?: string;
  company_id?: string;
  availability_status?: string;
}

import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  user_id: string;
  company_id: string;
  position: string;
  joined_date: any;
  salary: number;
  work_hours: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  position?: string;
}

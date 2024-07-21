import {User} from './auth';
import {IQueryParams, Paginated} from './common';

type MeetRequestStatus = 'pending' | 'accepted' | 'rejected';

export interface MeetRequestResponse extends User {}
export interface MeetResponse extends Paginated<MeetRequestResponse> {}
export interface MeetQuery extends IQueryParams {}

export type MatchRequestData = {
  title: string;
  data: MeetRequestResponse[];
}[];

export interface MeetRequestParam {
  id: number;
}
export interface MeetRequestBody {
  recipient: number;
}
export interface MeetRequestQuery {
  status: MeetRequestStatus;
}
export interface MeetRequestUpdateBody {
  id: number;
  status: 'accepted' | 'rejected';
}

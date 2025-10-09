import { Branche, Level, Mention } from '@/core/types';

export interface UserDto {
  imageUrl: string;
  identifier: number;
  name: string;
  lastName: string;
  contact: string;
  mention: Mention;
  level: Level;
  branche: Branche;
  mentionId: string;
  trancheId: string;
  Premier: boolean;
  Deuxieme: boolean;
  Troisieme: boolean;
}

import { MeetingType } from '@prisma/client';
import { IconType } from 'react-icons';
import { GiFilmProjector, GiTicket } from 'react-icons/gi';
import { BiServer } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';

export function getMeetingTypeString(type: MeetingType): string {
  switch (type) {
    case MeetingType.DM_MEETING:
      return 'DM Meeting';
    case MeetingType.IT_MEETING:
      return 'IT Meeting';
    case MeetingType.EXEC_MEETING:
      return 'Exec Meeting';
    case MeetingType.PROJECTIONIST_MEETING:
      return 'Projectionist Meeting';
    case MeetingType.PUBLICITY_MEETING:
      return 'Publicity Meeting';
  }
}

export function getMeetingTypeIcon(type: MeetingType): IconType {
  switch (type) {
    case MeetingType.DM_MEETING:
      return GiTicket;
    case MeetingType.IT_MEETING:
      return BiServer;
    case MeetingType.EXEC_MEETING:
      return FaUsers;
    case MeetingType.PROJECTIONIST_MEETING:
      return GiFilmProjector;
    case MeetingType.PUBLICITY_MEETING:
      return BsNewspaper;
  }
}

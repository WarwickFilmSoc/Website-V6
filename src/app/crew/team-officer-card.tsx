import { ExecPosition, getExecPositionNames } from '@/data/exec';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';

export default function TeamOfficerCard({
  position,
}: {
  position: ExecPosition;
}) {
  return (
    <a
      href={`mailto:${position.email}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white max-w-full"
    >
      <div className="bg-primary flex p-3 gap-x-2 drop-shadow-lg group hover:bg-primary-darker">
        <div className="flex justify-center items-center gap-x-2">
          {position.members.map((member, i) => (
            <div className="h-16 w-16 xs:h-20 xs:w-20 overflow-hidden" key={i}>
              <Image
                src={member.image}
                alt={member.name}
                className="object-contain group-hover:scale-105 h-16 w-16 xs:h-20 xs:w-20"
                height={200}
                width={200}
              />
            </div>
          ))}
        </div>
        <div className="overflow-hidden">
          <span className="block text-xl xs:text-2xl uppercase font-lexend font-bold text-ellipsis overflow-hidden leading-5">
            {getExecPositionNames(position)}
          </span>
          <span className="block text-sm xs:text-base font-bold leading-4 text-ellipsis overflow-hidden">
            {position.name}
          </span>
          <div className="block text-xs xs:text-sm mt-2 flex items-center">
            <FiMail className="mr-1" />
            <span className="text-ellipsis overflow-hidden">
              {position.email}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

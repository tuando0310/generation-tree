import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/helper/name';
import PersonDetailsPanel from '@/components/layout/PersonDetailsPanel';

const PersonNode = ({ person }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <PersonDetailsPanel person={person} open={open} setOpen={setOpen} />
      <div
        className="relative w-32 h-32 mx-auto rounded-full overflow-hidden cursor-pointer"
        style={{
          background: 'linear-gradient(to bottom, #87CEEB 50%, #228B22 50%)',
        }}
        onClick={() => setOpen(true)}
      >
        {/* Cloud pseudo-element */}
        <div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-white rounded-full"
          style={{ filter: 'blur(2px)' }}
        ></div>
        <Avatar className="w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <AvatarImage src={person.avatarUrl || ''} alt="Person avatar" />
          <AvatarFallback className="text-3xl">
            {getInitials(person.name, person.email)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-4">
        <p className="text-gray-500">Vocative</p>
        <p className="text-xl font-semibold text-gray-700">
          {person.name || person.email || 'N/A'}
        </p>
      </div>
      <p className="text-gray-500 mt-2">Start your family tree here</p>
    </div>
  );
};

export default PersonNode;
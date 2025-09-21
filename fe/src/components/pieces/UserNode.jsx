import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { getInitials } from '@/helper/name';

const UserNode = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="cursor-pointer">
            <Avatar className="w-32 h-32 mx-auto">
              <AvatarImage src={user.avatarUrl || ''} alt="User avatar" />
              <AvatarFallback className="text-4xl">
                {getInitials(user.name, user.email)}
              </AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-xl font-semibold text-gray-700">
              {user.name || user.email}
            </h2>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-6">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-700 font-semibold">Name:</label>
              <p className="text-gray-600">{user.name || 'N/A'}</p>
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Email:</label>
              <p className="text-gray-600">{user.email || 'N/A'}</p>
            </div>
            <div>
              <label className="text-gray-700 font-semibold">User ID:</label>
              <p className="text-gray-600">{user.userId || 'N/A'}</p>
            </div>
          </div>
          <Button
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserNode;
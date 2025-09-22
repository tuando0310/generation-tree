import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const UserDetailsPanel = ({ user, open, setOpen }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-80 p-6">
        <SheetHeader>
          <SheetTitle>User Details</SheetTitle>
          <SheetDescription>
            View your personal information including name, email, and user ID.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-4 mt-4">
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
  );
};

export default UserDetailsPanel;
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { getInitials } from '@/helper/name';

const UserDropdown = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center space-x-4 cursor-pointer">
              <span className="text-gray-700">{user.name || user.email}</span>
              <Avatar className="w-10 h-10">
                <AvatarImage src={user.avatarUrl || ''} alt="User avatar" />
                <AvatarFallback>{getInitials(user.name, user.email)}</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate('/profile')}>
              View Personal Data
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/change-password')}>
              Change Password
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <p className="text-gray-600">Not logged in</p>
      )}
    </div>
  );
};

export default UserDropdown;
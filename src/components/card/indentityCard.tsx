import React from "react";

interface IdentityCardProps {
  name?: string;
  profilePicture?: string;
  title?: string;
  children?: any;
}

const IdentityCard: React.FC<IdentityCardProps> = ({
  profilePicture,
  name,
  title,
  children,
}) => {
  return (
    <div className="max-w-sm mx-auto my-4 rounded-lg overflow-hidden shadow-lg">
      {/* Profile Section */}
      <div className="bg-blue-500 p-4">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full border-2 border-white"
            src={profilePicture}
            alt="Profile"
          />
          <div className="ml-4">
            <h2 className="text-white text-lg font-bold">{name}</h2>
            <p className="text-blue-200">{title}</p>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="bg-white p-4">{children}</div>
    </div>
  );
};

export default IdentityCard;

import React from 'react';
import { 
  FiClock, 
  FiTruck, 
  FiTag, 
  FiZap 
} from 'react-icons/fi';

const InfoBar = () => {
  return (
    <div className="py-4 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-6 text-blue-700">
          {/* Info Item 1 */}
          <div className="flex items-center space-x-3 w-full justify-center hover:underline">
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
              <FiClock size={36} className="sm:size-[32px]" />
            </div>
            <div>
              <p className="text-base sm:text-lg">Quick and Easy</p>
              <p className="text-base sm:text-lg">Store Pickup</p>
            </div>
          </div>

          {/* Info Item 2 */}
          <div className="flex items-center space-x-3 w-full justify-center hover:underline">
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
              <FiTruck size={36} className="sm:size-[32px]" />
            </div>
            <div>
              <p className="text-base sm:text-lg">Free shipping <br /> over $35</p>
            </div>
          </div>

          {/* Info Item 3 */}
          <div className="flex items-center space-x-3 w-full justify-center hover:underline">
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
              <FiTag size={36} className="sm:size-[32px]" />
            </div>
            <div>
              <p className="text-base sm:text-lg">Low Price Guarantee</p>
            </div>
          </div>

          {/* Info Item 4 */}
          <div className="flex items-center space-x-3 w-full justify-center hover:underline">
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
              <FiZap size={36} className="sm:size-[32px]" />
            </div>
            <div>
              <p className="text-base sm:text-lg">Latest and Greatest Tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
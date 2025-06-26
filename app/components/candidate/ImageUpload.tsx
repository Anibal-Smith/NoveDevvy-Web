'use client';

import { useState } from 'react';

interface ImageUploadProps {
  currentImage: string | null;
  onImageChange: (image: string) => void;
  placeholder: string;
  aspectRatio?: 'square' | 'banner' | 'rectangle';
  preview?: 'square' | 'circle';
}

export default function ImageUpload({ 
  currentImage, 
  onImageChange, 
  placeholder,
  aspectRatio = 'square',
  preview = 'square'
}: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const aspectClasses = {
    square: 'aspect-square',
    banner: 'aspect-[4/1]',
    rectangle: 'aspect-[16/9]'
  };

  const previewClasses = preview === 'circle' ? 'rounded-full' : 'rounded-lg';

  return (
    <div
      className={`relative ${aspectClasses[aspectRatio]} ${dragActive ? 'border-[#FF6B6B]' : 'border-gray-300'} border-2 border-dashed rounded-lg overflow-hidden transition-all cursor-pointer hover:border-[#FF6B6B]`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      
      {currentImage ? (
        <div className="relative w-full h-full">
          <img 
            src={currentImage} 
            alt="Upload preview" 
            className={`w-full h-full object-cover ${previewClasses}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-white font-medium">Cambiar imagen</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4 text-gray-500">
          <span className="text-4xl mb-2">📷</span>
          <p className="text-center">{placeholder}</p>
          <p className="text-sm text-gray-400 mt-1">Arrastra o haz clic</p>
        </div>
      )}
    </div>
  );
}
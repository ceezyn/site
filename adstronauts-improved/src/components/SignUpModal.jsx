import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Upload, User, Mail, Lock, Rocket } from 'lucide-react';

const SignUpModal = ({ children, onSignUp }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null
  });
  const [profilePreview, setProfilePreview] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profilePicture: file
      }));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (formData.username && formData.email && formData.password) {
      // In a real app, this would send data to a backend
      console.log('Sign up data:', formData);
      alert(`Welcome to AdStronauts, ${formData.username}! Your account has been created successfully.`);
      
      if (onSignUp) {
        onSignUp(formData);
      }
      
      setIsOpen(false);
      // Reset form
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicture: null
      });
      setProfilePreview(null);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-slate-900 border-purple-500/20 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
            <Rocket className="h-6 w-6 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Join AdStronauts
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-20 h-20 border-2 border-purple-500/30">
              <AvatarImage src={profilePreview} />
              <AvatarFallback className="bg-slate-800 text-gray-400">
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            
            <div className="relative">
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="hidden"
              />
              <Label
                htmlFor="profilePicture"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg cursor-pointer transition-colors"
              >
                <Upload className="h-4 w-4" />
                Upload Photo
              </Label>
            </div>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-300">Username *</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Choose your astronaut name"
                value={formData.username}
                onChange={handleInputChange}
                className="pl-10 bg-slate-800 border-purple-500/30 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 bg-slate-800 border-purple-500/30 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password *</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a secure password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 bg-slate-800 border-purple-500/30 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password *</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="pl-10 bg-slate-800 border-purple-500/30 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            Launch My Account 🚀
          </Button>
        </form>

        <p className="text-sm text-gray-400 text-center">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;


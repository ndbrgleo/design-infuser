
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface PriceEditorProps {
  onSave: (prices: PricingData) => void;
  initialPrices: PricingData;
  onCancel: () => void;
}

export interface PricingData {
  light: string;
  standard: string;
  premium: string;
  isAdmin: boolean;
}

const PriceEditor: React.FC<PriceEditorProps> = ({ onSave, initialPrices, onCancel }) => {
  const [prices, setPrices] = useState<PricingData>(initialPrices);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Simple authentication - in a real app, use proper auth
  const authenticate = () => {
    // Simple admin password for demo purposes
    if (password === "admin") {
      setIsAuthenticated(true);
      toast.success("Admin access granted");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleSave = () => {
    // Validate prices
    if (!prices.light || !prices.standard || !prices.premium) {
      toast.error("All prices must be filled");
      return;
    }
    
    onSave(prices);
    toast.success("Prices updated successfully");
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Admin Authentication</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="password">Admin Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use "admin" for this demo
            </p>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onCancel}>Cancel</Button>
            <Button onClick={authenticate}>Login</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Edit Pricing</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="admin-mode" className="text-sm">Admin Mode</Label>
          <Switch 
            id="admin-mode" 
            checked={prices.isAdmin}
            onCheckedChange={(checked) => setPrices(prev => ({ ...prev, isAdmin: checked }))}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="light-price">Light Plan Price (€)</Label>
          <Input 
            id="light-price" 
            value={prices.light.replace("€", "")}
            onChange={(e) => setPrices(prev => ({ ...prev, light: `€${e.target.value}` }))}
            placeholder="290"
          />
        </div>
        
        <div>
          <Label htmlFor="standard-price">Standard Plan Price (€)</Label>
          <Input 
            id="standard-price" 
            value={prices.standard.replace("€", "")}
            onChange={(e) => setPrices(prev => ({ ...prev, standard: `€${e.target.value}` }))}
            placeholder="590"
          />
        </div>
        
        <div>
          <Label htmlFor="premium-price">Premium Plan Price (€)</Label>
          <Input 
            id="premium-price" 
            value={prices.premium.replace("€", "")}
            onChange={(e) => setPrices(prev => ({ ...prev, premium: `€${e.target.value}` }))}
            placeholder="1290"
          />
        </div>
        
        <div className="flex justify-end space-x-2 pt-2">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default PriceEditor;

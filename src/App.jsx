import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import RealTimeMarketAnalysis from './components/RealTimeMarketAnalysis';
import './App.css';

function App() {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(30);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    let interval;
    if (autoRefresh) {
      interval = setInterval(() => {
        setLastUpdate(new Date());
      }, refreshInterval * 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh, refreshInterval]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            🚀 Advanced Trading AI Dashboard
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Intelligent Trading Signals with Dual Source Analysis
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
              ✅ Smart Trading Engine: Active
            </Badge>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              ✅ Market Data Feed: Connected
            </Badge>
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              ✅ Pocket Option Simulator: Running
            </Badge>
          </div>
        </div>

        {/* Configuration Panel */}
        <Card className="mb-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              ⚙️ Configuration & System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Auto Refresh Controls */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-300">Auto Refresh</label>
                  <Switch
                    checked={autoRefresh}
                    onCheckedChange={setAutoRefresh}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Refresh Interval: {refreshInterval}s
                  </label>
                  <Slider
                    value={[refreshInterval]}
                    onValueChange={(value) => setRefreshInterval(value[0])}
                    max={300}
                    min={10}
                    step={10}
                    className="w-full"
                  />
                </div>
              </div>

              {/* System Info */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300">System Information</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>🕐 Last Update: {lastUpdate.toLocaleTimeString()}</div>
                  <div>🔄 Auto-refresh: {autoRefresh ? 'Enabled' : 'Disabled'}</div>
                  <div>⏱️ Update Frequency: {refreshInterval}s</div>
                </div>
              </div>

              {/* Information Sharing Status */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300">Information Sharing</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>💡 Smart signals consider both data sources</div>
                  <div>📊 Real-time indicator comparison</div>
                  <div>🧠 AI learns from price discrepancies</div>
                  <div>🔄 Cross-component data sharing active</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content - Only Real-Time Market Analysis */}
        <RealTimeMarketAnalysis 
          autoRefresh={autoRefresh}
          refreshInterval={refreshInterval}
          lastUpdate={lastUpdate}
        />
      </div>
    </div>
  );
}

export default App;
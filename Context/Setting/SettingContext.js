import React, { useState } from 'react';

const defaultSetting = {
  drawer: false
}
export const SettingContext = React.createContext()

export function SettingComponent({ children }) {

  const [settings, useSetting] = useState(defaultSetting);

  const handleDrawer = (payload) => {
   useSetting({...settings, drawer:payload})
  }

  return <SettingContext.Provider value={{ settings, handleDrawer }} >{children}</SettingContext.Provider>
}
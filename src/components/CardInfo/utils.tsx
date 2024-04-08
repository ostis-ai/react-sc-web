import React from 'react';
import { InstallMethodType } from './types';
import DynamicallyInstalledComponent from '@assets/images/DynamicallyInstalledComponent.svg';
import ReusableComponent from '@assets/images/ReusableComponent.svg';

export const getInstallationMethodType = (type: InstallMethodType): React.ReactNode => {
  switch (type) {
    case InstallMethodType.DynamicallyInstalledComponent:
      return <DynamicallyInstalledComponent />;
    case InstallMethodType.ReusableComponent:
      return <ReusableComponent />;
    default:
      return null;
  }
};

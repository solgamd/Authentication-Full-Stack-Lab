import * as React from 'react';

export interface BackgroundProps {}
export interface BackgroundState {}
 
const Background: React.SFC<BackgroundProps> = () => {
    return (
        <img src="/images/topography.jpg" alt="background-image"/>
      );
}
 
export default Background;
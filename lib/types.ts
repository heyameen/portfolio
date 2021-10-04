export enum Form {
    Initial,
    Loading,
    Success,
    Error
  }
  
  export interface IFormState {
    state: Form;
    message?: string;
  }
  
  export interface ISubscribers {
    count: number;
  }
  
  export interface Views {
    total: number;
  }
  
  export interface ISong {
    songUrl: string;
    artist: string;
    title: string;
  }
  
  export interface INowPlayingSong {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
  }
  
  export interface ITopTracks {
    tracks: ISong[];
  }
  
  
  export interface IGitHub {
    stars: number;
  }
  
  
  
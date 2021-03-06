import { Injectable } from '@angular/core';
import { UsersModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  public racerList: UsersModel[] = [
    {
      profileImg: '../../assets/images/profile/jose-pintado.jpg',
      name: 'Jose',
      lastName: 'Pintado',
      urlProfile: 'JosePintado',
      alias: 'Jose',
      description: 'description jose',
      twitter: '@Jose',
      youtube: '@You-Jose',
      youtubeId: 'qwertyu',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Jose haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/yayo.jpg',
      name: 'Javi',
      lastName: 'Ortega',
      urlProfile: 'JaviOrtega',
      alias: 'Yayo',
      description: 'description yayo',
      twitter: '@yayo',
      youtube: '@asdfg',
      youtubeId: 'You-Yayo',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaa',
      photos: [
        {
          src: 'foto-javi.png',
          alt: 'Javi haciendo algo'
        },
        {
          src: 'foto-javi2.png',
          alt: 'Javi haciendo algo 2'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/pablo-garcia.png',
      name: 'Pablo',
      lastName: 'Garcia',
      urlProfile: 'PabloGarcia',
      alias: 'Pablo',
      description: 'description pablo',
      twitter: '@pablo',
      youtube: '@zxcvb',
      youtubeId: 'UCAnEUW12DYwZ8kgET9HXDKw',
      youtubeChannels:
        {
          alonso: '',
          ckrc: '',
          burgueno: '',
          csc: '',
        },
      youtubeTotalVideos: 0,
      yotubeApiKey: 'AIzaSyDlfsVpdTKoIkZfcCSI5YsYN5Tyd5Bbw3g',
      photos: [
        {
          src: '../../assets/images/driver/pablo-garcia/a.png',
          alt: 'Pablo haciendo algo 1'
        },
        {
          src: 'pablo-foto2.png',
          alt: 'Pablo haciendo algo 2'
        },
        {
          src: 'pablo-foto3.png',
          alt: 'Pablo haciendo algo 3'
        },
      ]
    },
    {
      profileImg: '../../assets/images/profile/mario-lobato.jpg',
      name: 'Mario',
      lastName: 'Lobato',
      urlProfile: 'MarioLobato',
      alias: 'Mario',
      description: 'description Mario',
      twitter: 'twitter7mario',
      youtube: 'You-mario',
      youtubeId: 'poiuy',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Mario haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/alejandro-barasoain.jpg',
      name: 'Alex',
      lastName: 'Barasoain',
      urlProfile: 'AlexBarasoain',
      alias: 'Alex B',
      description: 'description Alex',
      twitter: 'AleBara',
      youtube: 'You-Bara',
      youtubeId: 'jujuqwertyu',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Alex haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/alex-diaz.jpg',
      name: 'Alex',
      lastName: 'Diaz',
      urlProfile: 'AlexDiaz',
      alias: 'Alex D',
      description: 'description Aalexx',
      twitter: 'AlexDiaz',
      youtube: 'You-Jose',
      youtubeId: 'jijiqwertyu',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Aleexx haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/alvaro-barco.jpg',
      name: 'Álvaro',
      lastName: 'Barco',
      urlProfile: 'AlvaroBarco',
      alias: 'Álvaro',
      description: 'description alvaro',
      twitter: 'Alvaro',
      youtube: 'You-alvaro',
      youtubeId: 'guguguuqwertyu',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Alvaro haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/borja-luna.jpg',
      name: 'Borja',
      lastName: 'Luna',
      urlProfile: 'BorjaLuna',
      alias: 'Borja',
      description: 'description Borja',
      twitter: 'BorjaTw',
      youtube: 'You-Jose',
      youtubeId: 'oioiqwertyu',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Borja haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/maik.jpg',
      name: 'MiguelAngel',
      lastName: 'Gutierrez',
      urlProfile: 'MiguelAngelGutierrez',
      alias: 'Maik',
      description: 'description maik',
      twitter: 'Maik',
      youtube: 'You-maik',
      youtubeId: 'ijijqwertyu',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Maik haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/rafa-muniz.jpg',
      name: 'Rafa',
      lastName: 'Muñiz',
      urlProfile: 'RafaMuniz',
      alias: 'Rafa',
      description: 'description Rafa',
      twitter: 'rafa',
      youtube: 'You-rafa',
      youtubeId: 'uiuiqwertyu',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Rafa haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/ruben-escribano.jpg',
      name: 'Ruben',
      lastName: 'Escribano',
      urlProfile: 'RubenEscribano',
      alias: 'Ruben',
      description: 'description Ruben',
      twitter: 'Ruben',
      youtube: 'you-Jose',
      youtubeId: 'ererqwertyu',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'ruben haciendo algo'
        }
      ]
    },
    {
      profileImg: '../../assets/images/profile/sergio-platas.jpg',
      name: 'Sergio',
      lastName: 'Platas',
      urlProfile: 'SergioPlatas',
      alias: 'Sergio',
      description: 'description Sergio',
      twitter: 'sergio',
      youtube: 'You-sergio',
      youtubeId: 'qwertyuopopop',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Sergio haciendo algo'
        }
      ]
    },
    /*{
      profileImg: '../../assets/images/profile/cris.jpg',
      name: 'Cris',
      lastName: 'yayo',
      urlProfile: 'Cris',
      alias: 'Cris',
      description: 'Ingeniera de pista',
      twitter: 'Cris',
      youtube: 'You-cris',
      youtubeId: 'qwertybabababa',
      youtubeChannels: [{},{},{}],
      youtubeTotalVideos: 0,
      yotubeApiKey: 'aaaa',
      photos: [
        {
          src: 'Jose-foto.png',
          alt: 'Cris haciendo algo'
        }
      ]
    },*/
  ];

}

import { Injectable } from '@angular/core';
import { DataSource } from './data-source.interface';
import { Character } from '../models/character';
import { RandomUtils } from './utils/random-utils';

@Injectable()
export class MockDataSourceService implements DataSource {
  readonly testCharacters: Character[] = [
    {
      name: "Sonic the Hedgehog",
      franchise: "Sonic",
      imgUrl:"https://static.wikia.nocookie.net/sonic-universe/images/2/27/SFModernSonicRender.png"
    },
    {
      name: "Harry Potter",
      franchise: "Harry Potter",
      imgUrl:"https://images.ctfassets.net/usf1vwtuqyxm/6fjvdemYmo7kJ2V5P5Xqhc/1fc2b0b396123f891e858069e00d0d2b/hp-f6-harry-at-great-hall-table-web-fact-file-image.jpg?h=416&w=600&fit=pad"
    },
    {
      name: "Scott Pilgrim",
      franchise: "Scott Pilgrim Takes Off",
      imgUrl:"https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQWC9B-UV1Pk4k978GR3dwLkow9Iuim3pTe0n2-4rmK3M9QNt-1130bs99GrIUhKlr70py9CMxUvhAZqes51GlfA2RYfmBs-Q9il9Ld_G8ZE8VV4FbpB4E544UbH3GRpSPIrnSZbe22U1W1bq5OxArcsOMUo.jpg?r=5a9"
    },
    {
      name: "Pikachu",
      franchise: "Pokemon",
      imgUrl:"https://static.wikia.nocookie.net/wii/images/8/89/Pikachu.jpg"
    },
    {
      name: "Bowser",
      franchise: "Mario",
      imgUrl: "https://static.wikia.nocookie.net/mario/images/3/3f/SMBW_Bowser_Artwork.png"
    },
    {
      name: "Bilbo Baggins",
      franchise: "The Lord of the Rings",
      imgUrl: "https://static.wikia.nocookie.net/hobbit-trilogy/images/e/e1/BilboProfile.png"
    },
    {
      name: "Danny Phantom",
      franchise: "Danny Phantom",
      imgUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186112_i_v9_aa.jpg"
    },
    {
      name: "Gru",
      franchise: "Despicable Me",
      imgUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/201363/rs_600x600-130703124143-600.Gru.mh.070313.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"
    },
    {
      name: "Jon Snow",
      franchise: "Game of Thrones",
      imgUrl: "https://media.vanityfair.com/photos/63974b59d6001ee3cc78578a/1:1/w_2000,h_2000,c_limit/kit-harington-Jon-Snow.png"
    },
    {
      name: "Optimus Prime",
      franchise: "Transformers",
      imgUrl: "https://www.pedestrian.tv/wp-content/uploads/2021/11/12/optimus-prime-1.jpg?quality=75&w=1200&h=675&crop=1"
    }
  ]
  readonly testFlags: string[] = [
    "Turns into a full-sized horse on every full moon",
    "Tried selling your cat on ebay for quick cash",
    "Death stares babies until they cry at any available opportunity",
    "Steals your shoes",
    "Has a body temperature of 4 degrees",
    "Is heavily emotionally involved with a sex doll",
    "Has 19 children with other partners",
    "Jokes to his friends about wanting to kill you",
    "Aggressively sings Beyonce during sex",
    "Smells like a retirement home in Florida"
  ]

  constructor() { }

  cacheData(): Promise<void> {
    return Promise.resolve();
  }

  getThreeCharacters(): Character[] {
    return RandomUtils.getFreshRandom(this.testCharacters, 3);
  }

  getThreeFlags(): string[] {
    return RandomUtils.getFreshRandom(this.testFlags, 3);
  }
}

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // 模拟慢速连接
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve=>{
      setTimeout(()=>resolve(this.getHeroes()), 2000);
    });
  }
}
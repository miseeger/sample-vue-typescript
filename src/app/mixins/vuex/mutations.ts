import { MutationTree } from 'vuex';
import { MixinState, QuoteState, FeedState, CountryState } from './types';

export const mutations: MutationTree<MixinState> = {
  sampleLocationLoaded(state, payload: any) {
    console.log(payload);
    for (const c of payload) {
      const country: CountryState = {
        name: c.name,
        flag: c.flag,
        capital: c.capital,
        population: c.population,
        region: c.region,
        languages: c.languages.map((lang: any) => lang.name),
        nativeName: c.nativeName,
        area: c.area,
      };
      state.countries.push(country);
    }
  },

  locationError(state) {
    state.country = undefined;
  },

  sampleQuoteLoaded(state, payload: any) {
    const quote: QuoteState = { author: payload.author, category: payload.cat, quote: payload.quote };
    state.quote = quote;
  },

  sampleFeedsLoaded(state, payload: any) {
    for (const f of payload) {
      const feed: FeedState = {id: f.ID, content: f.content, title: f.title};
      state.feeds.push(feed);
    }
  },
};

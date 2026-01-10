import type { ArtefactIdType, ExchangeItemType } from 'src/types';

export const PYRAMID_EXCHANGE: ExchangeItemType[] = [
  {
    id: 'my_strength_is_quiet_but_unwavering',
    description: `My strength is quiet but unwavering.`,
    completed: false,
  },
  {
    id: 'i_hold_my_ground_even_as_the_world_around_me_changes',
    description: `I hold my ground even as the world around me changes.`,
    completed: false,
  },
  {
    id: 'stability_begins_within_me',
    description: `Stability begins within me.`,
    completed: false,
  },
  {
    id: 'i_will_stand_firm_as_the_light_of_my_days',
    description: `I will stand firm as the light of my days.`,
    completed: false,
  },
  {
    id: 'my_steps_are_sure_even_when_small',
    description: `My steps are sure, even when small.`,
    completed: false,
  },
  {
    id: 'where_i_am_focused_there_is_order',
    description: `Where I am focused, there is order.`,
    completed: false,
  },
  {
    id: 'my_foundation_is_strong_and_i_grow_on_it',
    description: `My foundation is strong, and I grow on it.`,
    completed: false,
  },
  {
    id: 'i_choose_strength_that_does_not_make_noise',
    description: `I choose strength that does not make noise.`,
    completed: false,
  },
  {
    id: 'my_inner_foundation_holds_me',
    description: `My inner foundation holds me.`,
    completed: false,
  },
  {
    id: 'i_am_composed_collected_and_strong',
    description: `I am composed, collected, and strong.`,
    completed: false,
  },
];

export const FLOWER_EXCHANGE: ExchangeItemType[] = [
  {
    id: 'my_beauty_is_natural_and_easy',
    description: `My beauty is natural and easy.`,
    completed: false,
  },
  {
    id: 'i_am_soft_but_strong',
    description: `I am soft, but strong.`,
    completed: false,
  },
  {
    id: 'today_i_allow_myself_to_shine',
    description: `Today I allow myself to shine.`,
    completed: false,
  },
  {
    id: 'tenderness_is_also_strength',
    description: `Tenderness is also strength.`,
    completed: false,
  },
  {
    id: 'my_mood_is_blooming',
    description: `My mood is blooming.`,
    completed: false,
  },
  {
    id: 'i_decorate_my_day_with_simple_things',
    description: `I decorate my day with simple things.`,
    completed: false,
  },
  {
    id: 'i_always_have_room_for_beauty',
    description: `I always have room for beauty.`,
    completed: false,
  },
  {
    id: 'the_light_falls_on_me_just_the_way_it_should',
    description: `The light falls on me just the way it should.`,
    completed: false,
  },
  {
    id: 'i_allow_myself_to_be_warm',
    description: `I allow myself to be warm.`,
    completed: false,
  },
  {
    id: 'beauty_comes_when_i_breathe_calmly',
    description: `Beauty comes when I breathe calmly.`,
    completed: false,
  },
];

export const BUG_EXCHANGE: ExchangeItemType[] = [
  {
    id: 'silence_speaks_louder_than_words',
    description: `Silence speaks louder than words.`,
    completed: false,
  },
  {
    id: 'i_see_what_others_dont_notice',
    description: `I see what others don't notice.`,
    completed: false,
  },
  {
    id: 'my_thoughts_are_clear_and_calm',
    description: `My thoughts are clear and calm.`,
    completed: false,
  },
  {
    id: 'wisdom_is_in_observation',
    description: `Wisdom is in observation.`,
    completed: false,
  },
  {
    id: 'i_listen_to_the_world_carefully',
    description: `I listen to the world carefully.`,
    completed: false,
  },
  {
    id: 'small_details_lead_me_to_big_changes',
    description: `Small details lead me to big changes.`,
    completed: false,
  },
  {
    id: 'my_mind_is_bright_and_even',
    description: `My mind is bright and even.`,
    completed: false,
  },
  {
    id: 'i_know_when_to_move_slowly',
    description: `I know when to move slowly.`,
    completed: false,
  },
  {
    id: 'quiet_decisions_are_the_strongest',
    description: `Quiet decisions are the strongest.`,
    completed: false,
  },
  {
    id: 'i_trust_my_inner_voice',
    description: `I trust my inner voice.`,
    completed: false,
  },
];

export const CROWN_EXCHANGE: ExchangeItemType = {
  id: 'crown_description',
  description: `A crown does not create beauty - it only highlights what is already inside.\nThe Queen once said that every woman has her own story of light, but she does not see it every day. That is why she created this crown as a sign: stop, look at yourself more closely. In the shine of gold you see not luxury, but a reflection of your own strength, softness and path.\nThe crown opens the story of beauty - a place where your steps, photos, thoughts and small victories are added up into its own legend. Beauty does not disappear, it is just waiting for you to look at it directly.`,
  completed: false,
};

export const CATEGORY_DESCRIPTIONS: Record<ArtefactIdType, string> = {
  Pyramid: 'Phrases of strength and confidence',
  Flower: 'Gentle phrases about beauty and mood',
  Bug: 'Phrases of wisdom and peace',
  Crown: 'Opens a new feature: "Beauty Story"',
};

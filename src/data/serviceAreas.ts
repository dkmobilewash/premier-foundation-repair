/** Service-area pages, shared by the router and the route manifest. */
export const serviceAreas: Record<string, { cityName: string; cityIntro: string; nearbyAreas: { label: string; to: string }[] }> = {
  'baton-rouge': {
    cityName: 'Baton Rouge',
    cityIntro: 'Greater Baton Rouge\'s most trusted foundation repair specialists. Serving homeowners across East Baton Rouge Parish with permanent solutions for Louisiana\'s challenging clay soils.',
    nearbyAreas: [
      { label: 'Central', to: '/central' },
      { label: 'Zachary', to: '/zachary' },
      { label: 'Port Allen', to: '/port-allen' },
      { label: 'Prairieville', to: '/prairieville' },
    ],
  },
  'central': {
    cityName: 'Central',
    cityIntro: 'Premier Foundation Repair serves Central, Louisiana homeowners with the same precision engineering and lifetime warranty that has made us the trusted choice across Greater Baton Rouge.',
    nearbyAreas: [
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Zachary', to: '/zachary' },
      { label: 'Denham Springs', to: '/denham-springs' },
    ],
  },
  'denham-springs': {
    cityName: 'Denham Springs',
    cityIntro: 'Denham Springs homeowners face the same expansive clay soil challenges as the rest of the Baton Rouge metro. Our drilled pier method delivers permanent results backed by a lifetime warranty.',
    nearbyAreas: [
      { label: 'Central', to: '/central' },
      { label: 'Hammond', to: '/hammond' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
    ],
  },
  'gonzales': {
    cityName: 'Gonzales',
    cityIntro: 'Serving Gonzales and Ascension Parish with expert foundation repair, drainage solutions, and small demolition services. Licensed, insured, and backed by our lifetime warranty.',
    nearbyAreas: [
      { label: 'Prairieville', to: '/prairieville' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Plaquemine', to: '/plaquemine' },
    ],
  },
  'hammond': {
    cityName: 'Hammond',
    cityIntro: 'Premier Foundation Repair brings our proven drilled pier method and decades of Louisiana soil expertise to Hammond and Tangipahoa Parish homeowners.',
    nearbyAreas: [
      { label: 'Denham Springs', to: '/denham-springs' },
      { label: 'Pine Grove', to: '/pine-grove' },
    ],
  },
  'pine-grove': {
    cityName: 'Pine Grove',
    cityIntro: 'Foundation repair services for Pine Grove and the surrounding communities. Same trusted methods, same lifetime warranty, same local team.',
    nearbyAreas: [
      { label: 'Hammond', to: '/hammond' },
      { label: 'Denham Springs', to: '/denham-springs' },
    ],
  },
  'plaquemine': {
    cityName: 'Plaquemine',
    cityIntro: 'Serving Plaquemine and Iberville Parish with expert slab and pier & beam foundation repair, drainage solutions, and demolition services.',
    nearbyAreas: [
      { label: 'Port Allen', to: '/port-allen' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Gonzales', to: '/gonzales' },
    ],
  },
  'port-allen': {
    cityName: 'Port Allen',
    cityIntro: 'Port Allen and West Baton Rouge Parish homeowners trust Premier Foundation Repair for permanent foundation solutions engineered for Louisiana\'s demanding soil conditions.',
    nearbyAreas: [
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Plaquemine', to: '/plaquemine' },
    ],
  },
  'prairieville': {
    cityName: 'Prairieville',
    cityIntro: 'Prairieville is one of the fastest-growing communities in the Baton Rouge area — and its clay soils present the same foundation challenges. We deliver permanent solutions with a lifetime warranty.',
    nearbyAreas: [
      { label: 'Gonzales', to: '/gonzales' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Zachary', to: '/zachary' },
    ],
  },
  'zachary': {
    cityName: 'Zachary',
    cityIntro: 'Premier Foundation Repair serves Zachary and northern East Baton Rouge Parish with expert foundation repair, drainage, and demolition services backed by our lifetime warranty.',
    nearbyAreas: [
      { label: 'Central', to: '/central' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Hammond', to: '/hammond' },
    ],
  },
};

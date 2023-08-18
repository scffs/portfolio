const hobbies = [
  '"Learning English"',
  '"Math"',
  '"Gym"',
  '"VK Testers & Crowd"',
  '"Blog on Habr"',
  '"Learning pentest"',
];

export const personInfo = [
  { key: 'name', value: 'Semyon' },
  { key: 'lastName', value: 'Okulov' },
  { key: 'age', value: 'between 0 and 48' },
  { key: 'gender', value: 'the only one' },
  { key: 'hobbies', value: hobbies.join(`,\n${' '.repeat(12)}`) },
];

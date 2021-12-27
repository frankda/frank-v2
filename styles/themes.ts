export type ThemeType = {
  color: {
    backgroundColor: string,
    fontColor: string,
    homepageDark: string,
    homepageLight: string
  },
}

export const DARK_THEME: ThemeType = {
  color: {
    backgroundColor: '#0E141B',
    fontColor: '#ffffff',
    homepageDark: 'hsla(200deg, 100%, 85%, 0.1)',
    homepageLight: 'hsla(200deg, 100%, 85%, 0)'
  }
}

export const LIGHT_THEME: ThemeType = {
  color: {
    backgroundColor: '#ffffff',
    fontColor: '#010C10',
    homepageDark: 'hsl(202deg, 71%, 90%)',
    homepageLight: 'hsl(204deg, 67%, 85%)'
  }
}
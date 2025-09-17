export interface GithubRepo {
  full_name: string
  description: string | null
  html_url: string
  owner: {
    avatar_url: string
  }
}

export interface UnivespJSON {
  disciplinas: {
    nome: string
    carga: string
    status: string
  }[]
}

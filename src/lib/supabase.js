import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '[supabase] 환경변수가 없습니다. .env 에 VITE_SUPABASE_URL 과 VITE_SUPABASE_ANON_KEY 를 설정한 뒤 dev 서버를 재시작하세요.',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

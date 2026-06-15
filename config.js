// Ganti dengan Project URL Anda dari Supabase
const SUPABASE_URL = 'https://lkzplpejlwagavakmeep.supabase.co/rest/v1/'; 

// Ganti dengan anon public key Anda dari Supabase
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrenBscGVqbHdhZ2F2YWttZWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NjQ0ODIsImV4cCI6MjA5NzA0MDQ4Mn0.YgXbAFdCdqpjT6sEutw7wJwSwUWj9qFBtRvBniXCqiI'; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

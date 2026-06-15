const SUPABASE_URL = 'https://lkzplpejlwagavakmeep.supabase.co/rest/v1/'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrenBscGVqbHdhZ2F2YWttZWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NjQ0ODIsImV4cCI6MjA5NzA0MDQ4Mn0.YgXbAFdCdqpjT6sEutw7wJwSwUWj9qFBtRvBniXCqiI'; 

// Menggunakan nama variabel unik agar tidak bentrok dengan fungsi bawaan library
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

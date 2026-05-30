import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://frpqnlwwlulwtnwsljws.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZycHFubHd3bHVsd3Rud3NsandzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxODk0NTgsImV4cCI6MjA5NDc2NTQ1OH0.BHda1pbPrVWOW0iAiW-DAXs69RqfahUvw47cqdUURA0";

export const supabase =
  createClient(supabaseUrl, supabaseKey);
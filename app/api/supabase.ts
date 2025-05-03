import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zbsggxpkgwhaoneuxams.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpic2dneHBrZ3doYW9uZXV4YW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNTA3NjIsImV4cCI6MjA2MTYyNjc2Mn0.O3NCcw-Z2gQ_fq-FN07Ne9gBCKcTQaG7JJys6TDRpLE';

export const supabase = createClient(supabaseUrl, supabaseKey);
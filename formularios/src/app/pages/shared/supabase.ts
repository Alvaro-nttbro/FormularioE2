import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://lhqdtzdyqdsrfdkvalnw.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxocWR0emR5cWRzcmZka3ZhbG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MjY3NTYsImV4cCI6MjA5MzAwMjc1Nn0.d3JxvdNYt6lKU8Yuzzclb4XKygszZD7y6C2dEgQHNyE'
    );
  }

  getClient() {
    return this.supabase;
  }
}

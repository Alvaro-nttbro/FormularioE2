import { inject, Injectable } from '@angular/core';
import { SolicitudModel } from './solicitud-model';
import { SupabaseService } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  private supabase = inject(SupabaseService);

  async create(data: any) {
    const { data: result, error } = await this.supabase
      .getClient()
      .from('solicitudes')
      .insert([data]);

    if (error) throw error;

    return result;
  }

  async getAllByEmail(email: string): Promise<SolicitudModel[]> {
    const { data, error } = await this.supabase
      .getClient()
      .from('solicitudes')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data as SolicitudModel[];
  }
}

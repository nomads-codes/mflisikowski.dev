import UseSupabase from '@/composables/supabase';

export const getAllWorkspaces = async () => {
  const client = UseSupabase();
  const response = await client.from('workplaces').select('*').order('id');
  const workplaces = response.data || [];

  return {
    workplaces,
  };
};

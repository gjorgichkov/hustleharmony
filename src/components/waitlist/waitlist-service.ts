import { supabase } from "@/integrations/supabase/client";

export interface WaitlistEntry {
  name: string;
  email: string;
}

export const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error("Error checking email:", error);
      return false;
    }

    return !!data;
  } catch (error) {
    console.error("Error in checkEmailExists:", error);
    return false;
  }
};

export const addToWaitlist = async (entry: WaitlistEntry): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from("waitlist")
      .insert([entry]);

    if (error) {
      console.error("Error adding to waitlist:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error in addToWaitlist:", error);
    return false;
  }
};
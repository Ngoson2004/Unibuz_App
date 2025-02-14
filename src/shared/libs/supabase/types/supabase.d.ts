export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      attending_event: {
        Row: {
          event_id: number | null
          id: number
          registration_date: string
          user_id: string | null
        }
        Insert: {
          event_id?: number | null
          id?: number
          registration_date?: string
          user_id?: string | null
        }
        Update: {
          event_id?: number | null
          id?: number
          registration_date?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attending_event_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "event"
            referencedColumns: ["event_id"]
          },
          {
            foreignKeyName: "attending_event_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      campus: {
        Row: {
          campus_name: string | null
          created_at: string
          id: number
          uni_id: number | null
        }
        Insert: {
          campus_name?: string | null
          created_at?: string
          id?: number
          uni_id?: number | null
        }
        Update: {
          campus_name?: string | null
          created_at?: string
          id?: number
          uni_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "campus_uni_id_fkey"
            columns: ["uni_id"]
            isOneToOne: false
            referencedRelation: "university"
            referencedColumns: ["id"]
          },
        ]
      }
      comment: {
        Row: {
          comment_id: number
          comment_text: string | null
          created_at: string
          post_id: number | null
          user_id: string | null
        }
        Insert: {
          comment_id?: number
          comment_text?: string | null
          created_at?: string
          post_id?: number | null
          user_id?: string | null
        }
        Update: {
          comment_id?: number
          comment_text?: string | null
          created_at?: string
          post_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comment_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "post"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "comment_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      event: {
        Row: {
          created_at: string
          creator_id: string | null
          date: string | null
          description: string | null
          event_id: number
          location: string | null
          max_attendance: number | null
          time: string | null
          title: string | null
          tribe_id: number | null
          type: string | null
        }
        Insert: {
          created_at?: string
          creator_id?: string | null
          date?: string | null
          description?: string | null
          event_id?: number
          location?: string | null
          max_attendance?: number | null
          time?: string | null
          title?: string | null
          tribe_id?: number | null
          type?: string | null
        }
        Update: {
          created_at?: string
          creator_id?: string | null
          date?: string | null
          description?: string | null
          event_id?: number
          location?: string | null
          max_attendance?: number | null
          time?: string | null
          title?: string | null
          tribe_id?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_tribe_id_fkey"
            columns: ["tribe_id"]
            isOneToOne: false
            referencedRelation: "tribe"
            referencedColumns: ["tribe_id"]
          },
        ]
      }
      event_media: {
        Row: {
          created_at: string
          event_id: number
          id: number
          media_type: Database["public"]["Enums"]["media type"]
          url: string
        }
        Insert: {
          created_at?: string
          event_id: number
          id?: number
          media_type: Database["public"]["Enums"]["media type"]
          url: string
        }
        Update: {
          created_at?: string
          event_id?: number
          id?: number
          media_type?: Database["public"]["Enums"]["media type"]
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_media_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "event"
            referencedColumns: ["event_id"]
          },
        ]
      }
      interest: {
        Row: {
          created_at: string
          id: number
          interest_name: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          interest_name?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          interest_name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string
          id: number
          post_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          post_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          post_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "post"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      post: {
        Row: {
          content: string | null
          created_at: string
          post_id: number
          title: string | null
          tribe_id: number | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          post_id?: number
          title?: string | null
          tribe_id?: number | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          post_id?: number
          title?: string | null
          tribe_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_tribe_id_fkey"
            columns: ["tribe_id"]
            isOneToOne: false
            referencedRelation: "tribe"
            referencedColumns: ["tribe_id"]
          },
          {
            foreignKeyName: "post_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      post_media: {
        Row: {
          created_at: string
          id: number
          media_type: Database["public"]["Enums"]["media type"] | null
          post_id: number | null
          URL: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          media_type?: Database["public"]["Enums"]["media type"] | null
          post_id?: number | null
          URL?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          media_type?: Database["public"]["Enums"]["media type"] | null
          post_id?: number | null
          URL?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "post"
            referencedColumns: ["post_id"]
          },
        ]
      }
      product: {
        Row: {
          created_at: string
          description: string | null
          price: number | null
          product_id: number
          title: string | null
          unit: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          price?: number | null
          product_id?: number
          title?: string | null
          unit?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          price?: number | null
          product_id?: number
          title?: string | null
          unit?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      product_media: {
        Row: {
          created_at: string
          id: number
          mediaType: Database["public"]["Enums"]["media type"]
          product_id: number
          url: string
        }
        Insert: {
          created_at?: string
          id?: number
          mediaType: Database["public"]["Enums"]["media type"]
          product_id: number
          url: string
        }
        Update: {
          created_at?: string
          id?: number
          mediaType?: Database["public"]["Enums"]["media type"]
          product_id?: number
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_media_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["product_id"]
          },
        ]
      }
      role: {
        Row: {
          created_at: string
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: number
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
        }
        Relationships: []
      }
      tribe: {
        Row: {
          created_at: string
          is_private: boolean | null
          member_count: number | null
          tribe_category: string | null
          tribe_description: string | null
          tribe_id: number
          tribe_name: string | null
        }
        Insert: {
          created_at?: string
          is_private?: boolean | null
          member_count?: number | null
          tribe_category?: string | null
          tribe_description?: string | null
          tribe_id?: number
          tribe_name?: string | null
        }
        Update: {
          created_at?: string
          is_private?: boolean | null
          member_count?: number | null
          tribe_category?: string | null
          tribe_description?: string | null
          tribe_id?: number
          tribe_name?: string | null
        }
        Relationships: []
      }
      tribe_member: {
        Row: {
          created_at: string
          id: number
          tribe_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          tribe_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          tribe_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tribe_member_tribe_id_fkey"
            columns: ["tribe_id"]
            isOneToOne: false
            referencedRelation: "tribe"
            referencedColumns: ["tribe_id"]
          },
          {
            foreignKeyName: "tribe_member_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tribe_profile: {
        Row: {
          created_at: string
          id: number
          tribe_id: number | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          tribe_id?: number | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          tribe_id?: number | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tribe_profile_tribe_id_fkey"
            columns: ["tribe_id"]
            isOneToOne: false
            referencedRelation: "tribe"
            referencedColumns: ["tribe_id"]
          },
        ]
      }
      university: {
        Row: {
          created_at: string
          id: number
          university_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          university_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          university_name?: string | null
        }
        Relationships: []
      }
      user_interest: {
        Row: {
          created_at: string
          id: number
          interest_id: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          interest_id?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          interest_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_interest_interest_id_fkey"
            columns: ["interest_id"]
            isOneToOne: false
            referencedRelation: "interest"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_interest_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_role: {
        Row: {
          created_at: string
          id: number
          role_id: number
          tribe_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          role_id?: number
          tribe_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          role_id?: number
          tribe_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_role_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_role_tribe_id_fkey"
            columns: ["tribe_id"]
            isOneToOne: false
            referencedRelation: "tribe"
            referencedColumns: ["tribe_id"]
          },
          {
            foreignKeyName: "user_role_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          email: string | null
          id: string
          user_name: string | null
        }
        Insert: {
          email?: string | null
          id: string
          user_name?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          user_name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      "media type": "Video" | "Image" | "Document"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

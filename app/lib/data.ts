import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const queries = {
  dispatches: async () => {
    try {
      const dispatches = await sql`
        SELECT d.*, dr.first_name,dr.last_name FROM dispatches d
        LEFT JOIN drivers dr ON d.driver_id = dr.id
        WHERE d.status != 'delivered'
        ORDER BY d.status DESC
      `;
      return dispatches;
    } catch (error) {
      console.error("Error fetching dispatches:", error);
      throw error;
    }
  },

    pendingDispatches: async () => {
    try {
      const dispatches = await sql`
        SELECT d.*, dr.first_name,dr.last_name FROM dispatches d
        LEFT JOIN drivers dr ON d.driver_id = dr.id
        WHERE d.status = 'pending'
        ORDER BY d.status DESC
      `;
      return dispatches;
    } catch (error) {
      console.error("Error fetching dispatches:", error);
      throw error;
    }
  },

  
    inTransitDispatches: async () => {
    return await sql`
      SELECT 
        d.*,
        dr.first_name,
        dr.last_name
      FROM dispatches d
      LEFT JOIN drivers dr
        ON d.driver_id = dr.id
      WHERE d.status = 'in_transit'
      ORDER BY d.created_at DESC
    `;
  },
};

export default queries;
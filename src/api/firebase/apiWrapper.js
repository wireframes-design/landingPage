export const apiWrapper = async (apiRequest) => {
    try {
      const response = await apiRequest();
      // Check the response status code
      if (response.status_code === 200) {
        const data = await response.data // Assuming JSON response
        return {
          success: true,
          data: data,
        };
      } else {
        return {
          success: false,
          message: response.message,
          error: `Error: ${response.status_code} - ${response.message}`,
        };
      }
    } catch (error) {
      // Error case: handle any errors during the request
      console.error("API error:", error);
      return {
        success: false,
        // message: response.message,
        error: error.message,
      };
    }
  };
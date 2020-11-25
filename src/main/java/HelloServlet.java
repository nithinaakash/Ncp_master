import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
// import com.mysql.jdbc.Driver;
@WebServlet("/hello") 

public class HelloServlet extends HttpServlet {
  Connection con = null;
  Statement stmt;
  ResultSet res;

  @Override

  public void init() throws ServletException {

    

    super.init();


 

    try{
     
      Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("JAR File exists");
      con = DriverManager.getConnection("jdbc:mysql://localhost:3306/sys", "root", "root"); 

      stmt = con.createStatement();

    }catch (Exception e){

      e.printStackTrace();

    }

  }


 

  @Override

  public void doGet(HttpServletRequest request, HttpServletResponse response)
         throws IOException, ServletException {
        try{
          String title = request.getParameter("title");
          System.out.println("Request Parameter: " + title);
          // if (title == "") {
          //   title = "Actuary";
          // }
          PreparedStatement ps =con.prepareStatement("SELECT * FROM study WHERE title = ?");
          ps.setString(1, title);
          ResultSet rs = ps.executeQuery();
          String salary_info="", job_info="", education="";   
          while (rs.next()) {
            salary_info = rs.getString(2);
            job_info = rs.getString(3);
            education = rs.getString(4);
          }
          request.setAttribute("title", title);
          request.setAttribute("salary_info",salary_info);
          request.setAttribute("job_info",job_info);
          request.setAttribute("education",education);

          RequestDispatcher rdo =request.getRequestDispatcher("/project/html/Actuary.jsp");
          rdo.forward(request, response);

        } catch (Exception e) {
          System.out.println("error");
        }

  }

}
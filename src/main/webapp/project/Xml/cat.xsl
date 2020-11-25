<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  
  <style>
    body {
        font-family: "Times New Roman", Times, serif;
        background-color: cyan;
    }

    table {
        border-collapse: collapse;
    }

    table, th, td {
        border: 5px solid black;
    }

    th, td {
        text-align: center;
        padding: 8px;
    }

    th {
        font-size: 16px;
        background-color: grey;
        color: white;
    }

    td {
        font-size: 14px;
        font-weight: bold;
        
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
  </style>
  <body>
    <h2>Higher Studies Details</h2>
    <table>
      <tr>
        <th>Title</th>
        <th>job_info</th>
        <th>salary_info</th>
        <th>Education</th>
      </tr>
      <xsl:for-each select="root/public">
        <tr>
          <td><xsl:value-of select="@category"/></td>
          <td><xsl:value-of select="job_info"/></td>
          <td><xsl:value-of select="Salary_info"/></td>
          <td><xsl:value-of select="Education"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
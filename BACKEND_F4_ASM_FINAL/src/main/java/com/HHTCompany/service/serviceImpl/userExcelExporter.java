package com.HHTCompany.service.serviceImpl;
 
import java.io.IOException;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.HHTCompany.entity.user;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
 
public class userExcelExporter {
    private XSSFWorkbook workbook;
    private XSSFSheet sheet;
    private List<user> listUsers;
     
    public userExcelExporter(List<user> listUsers) {
        this.listUsers = listUsers;
        workbook = new XSSFWorkbook();
    }
 
 
    private void writeHeaderLine() {
        sheet = workbook.createSheet("Users");
        sheet.setColumnWidth(4, 25 * 256);
        sheet.setColumnWidth(5, 30 * 256);
        sheet.setColumnWidth(6, 25 * 256);
        sheet.setColumnWidth(7, 34 * 256);
        sheet.setColumnWidth(8, 25 * 256);
        sheet.setColumnWidth(8, 25 * 256);
        sheet.setColumnWidth(9, 25 * 256);
        
         
        Row row = sheet.createRow(0);
        Row row1 = sheet.createRow(1);
        Row row2 = sheet.createRow(2);
        Row row3= sheet.createRow(3);
         
        CellStyle styleUserID = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setBold(true);
        font.setFontHeight(16);
        styleUserID.setAlignment(HorizontalAlignment.CENTER);
        styleUserID.setFont(font);
         
        createCell(row, 4, "User ID", styleUserID);      
        createCell(row, 5, "Username", styleUserID);       
        createCell(row, 6, "Role Id", styleUserID);    
        createCell(row, 7, "Email", styleUserID);
        createCell(row, 8, "Number phone", styleUserID);
        createCell(row, 9, "Birthday", styleUserID);
         
    }
     
    private void createCell(Row row, int columnCount, Object value, CellStyle style) {
        sheet.autoSizeColumn(columnCount);
        Cell cell = row.createCell(columnCount);
        if (value instanceof Integer) {
            cell.setCellValue((Integer) value);
        } else if (value instanceof Boolean) {
            cell.setCellValue((Boolean) value);
        }else {
            cell.setCellValue((String) value);
        }
        cell.setCellStyle(style);
    }
     
    private void writeDataLines() {
        int rowCount = 1;
 
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setFontHeight(14);
        style.setFont(font);
        style.setAlignment(HorizontalAlignment.CENTER);
                 
        for (user user : this.listUsers) {
            Row row = sheet.createRow(rowCount++);
            int columnCount = 4;
             
            createCell(row, columnCount++, user.getUSERID(), style);
            createCell(row, columnCount++, user.getUSERNAME(), style);
            createCell(row, columnCount++, user.getROLEID(), style);
            createCell(row, columnCount++, user.getEMAIL(), style);
            createCell(row, columnCount++, user.getNUMBERPHONE(), style);
            createCell(row, columnCount++, user.getBIRTHDAY().toString(), style);
        }
    }
     
    public void export(HttpServletResponse response) throws IOException {
        writeHeaderLine();
        writeDataLines();
         
        ServletOutputStream outputStream = response.getOutputStream();
        workbook.write(outputStream);
        workbook.close();
         
        outputStream.close();
         
    }
}
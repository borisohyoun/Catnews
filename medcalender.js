
                                document.write("<select name='birth' id='year'>");
                                for (var i = 2002; i <= 2038; i++) {
                                    document.write("<option value='" + i + "'>" + i + "</option>")
                                }
                                document.write("</select>");
                                document.write("<select name='birth' id='month'>");
                                for (var j = 1; j <= 12; j++) {
                                    document.write("<option value='" + j + "'>" + j + "</option>")
                                }
                                document.write("</select>");
                                document.write("<select name='birth' id='date'>");
                                for (var k = 1; k <= 31; k++) {
                                    document.write("<option value='" + k + "'>" + k + "</option>")
                                }
                                document.write("</select>");
                        

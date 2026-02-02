@echo off
echo 正在設定防火牆規則允許 Port 8080...
netsh advfirewall firewall add rule name="Resume Website Port 8080" dir=in action=allow protocol=TCP localport=8080
echo.
echo 防火牆規則已新增！
echo 現在可以透過 http://192.168.213.113:8080 從其他裝置訪問網站了
echo.
pause

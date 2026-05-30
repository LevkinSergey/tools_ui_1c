chcp 65001
@oscript.exe -encoding=utf-8 .\src\builder\build.os %*
@exit /b %ERRORLEVEL%

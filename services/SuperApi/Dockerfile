FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["SuperApi/SuperApi.csproj", "SuperApi/"]
RUN dotnet restore "SuperApi/SuperApi.csproj"
COPY . .
WORKDIR "/src/SuperApi"
RUN dotnet build "SuperApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SuperApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SuperApi.dll"]

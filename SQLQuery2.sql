/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [ParticipantID]
      ,[Name]
      ,[Email]
      ,[Score]
      ,[TimeSpent]
  FROM [QuizDB].[dbo].[Participant]
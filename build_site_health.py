import os
import subprocess


def get_git_revision_hash() -> str:
    return subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode('ascii').strip()


def get_git_revision_short_hash() -> str:
    return subprocess.check_output(['git', 'rev-parse', '--short', 'HEAD']).decode('ascii').strip()


def get_build_date() -> str:
    return subprocess.check_output(['date', '+%Y-%m-%dT%H:%M:%S']).decode('ascii').strip()


def gen_site_health_content(
    git_commit_short: str,
    git_commit_link: str, 
    build_date: str,
    website_monitoring_dashboard: str
) -> str:
    title = 'Site Health'
    return f'''---
hide:
  - feedback
---

# {title}

key |   value
:---------: | :----------------------------------:
the last git commit | [{git_commit_short}]({git_commit_link})
the most recent deploy date | {build_date}
the public website monitoring dashboard | :material-check: [statuspage.freshping.io]({website_monitoring_dashboard})
'''
    

if __name__ == "__main__":
    file_path = './docs/site_health.md'
    
    git_commit_short =  get_git_revision_short_hash()
    git_commit_long = get_git_revision_hash()
    git_commit_link = 'https://github.com/DataLearner-org/DataLearner.org/commit/' + git_commit_long

    build_date = get_build_date()

    website_monitoring_dashboard = 'https://statuspage.freshping.io/66131-Datalearnerorg'

    with open(file_path,'w') as fp:
        fp.write(
            gen_site_health_content(
                git_commit_short,
                git_commit_link,
                build_date,
                website_monitoring_dashboard
            )
        )
